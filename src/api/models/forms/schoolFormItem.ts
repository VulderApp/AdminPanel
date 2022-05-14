import { Status } from "./schoolFormStatus";

export interface SchoolFormItem {
  requesterEmail: string;
  schoolName: string;
  schoolUrl: string;
  timetableUrl: string;
  createdAt: Date;
  status: Status;
  approveAdminId: string;
  approvedAt: Date;
  id: string;
}
