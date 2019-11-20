declare global {
  type IUser = {
    image?: IImage;
    fullName: string;
    email: string;
    phone?: string;
    tags?: string[];

    /**
     * 1 << 0 - External
     * 1 << 1 - Student
     * 1 << 2 - Expert
     * 1 << 3 - Admin
     */
    role: number;
  };
}

export {};
