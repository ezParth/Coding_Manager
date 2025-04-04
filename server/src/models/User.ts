import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  defaultCodeforcesId: string
  defaultLeetcodeId: string
  Projects: [ObjectId]
  NumberOfProjects: number
  Resume: ObjectId
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  defaultCodeforcesId: { type: String },
  defaultLeetcodeId: { type: String },
  Projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  NumberOfProjects: { type: Number, default: 0 },
  Resume: { type: mongoose.Schema.Types.ObjectId, ref: 'Resume' }
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
