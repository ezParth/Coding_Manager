import axios from "axios";
import crypto from "crypto"

//please change afterwords
const API_KEY = "8f734c25c20f74487294e034716cac76382f9c2b"
const API_SECRET = "5d1f326e0f5e7b001429e19c7813568a0f0e5516"

const generateApiSig = (n)