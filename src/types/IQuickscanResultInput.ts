declare global {
  type IQuickscanResultInput = {
    uuid?: string;
    target?: number;
    person?: {
      name: string;
      email: string;
      role: string;
      phone: string;
    };
    company?: {
      companyName: string;
      website: string;
      sector: string;
      region: string;
      employeeCount: number;
    };
    answers: {
      [name: string]: number;
    };
    comment?: string;
  };
}

export {};
