import axios from "axios";
import crypto from "crypto"

//please change afterwords
const API_KEY = "8f734c25c20f74487294e034716cac76382f9c2b"
const API_SECRET = "5d1f326e0f5e7b001429e19c7813568a0f0e5516"

// Function to generate API signature
const generateApiSig = (method: string, params: Record<string, string | number>) => {
    const rand = Math.random().toString(36).substring(2, 8); // 6-char random string
    const time = Math.floor(Date.now() / 1000); // Current UNIX timestamp

    // Add required parameters
    params.apiKey = API_KEY;
    params.time = time;

    // Sort parameters lexicographically
    const sortedParams = Object.entries(params)
        .sort(([aKey, aVal], [bKey, bVal]) => (aKey === bKey ? aVal.toString().localeCompare(bVal.toString()) : aKey.localeCompare(bKey)))
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    // Construct the signature base string
    const signatureBase = `${rand}/${method}?${sortedParams}#${API_SECRET}`;

    // Generate SHA-512 hash
    const hash = crypto.createHash("sha512").update(signatureBase).digest("hex");

    // Final API signature
    const apiSig = `${rand}${hash}`;

    return { time, apiSig };
};

// Function to make API requests
export const fetchCodeforcesData = async (method: string, params: Record<string, string | number> = {}) => {
    const { time, apiSig } = generateApiSig(method, params);

    // Construct the final API URL
    const url = `https://codeforces.com/api/${method}?${new URLSearchParams({
        ...params,
        apiKey: API_KEY,
        time: time.toString(),
        apiSig,
    }).toString()}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching Codeforces data:", error);
        throw error;
    }
};
