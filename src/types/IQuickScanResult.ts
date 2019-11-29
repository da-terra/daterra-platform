declare global {
  type IQuickScanResultInput = {
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

  type IQuickScanResult = {
    uuid: string;
    target: number;
    person: {
      name: string;
      email: string;
      role: string;
      phone: string;
    };
    company: {
      companyName: string;
      website: string;
      sector: string;
      region: string;
      employeeCount: number;
    };
    answers: {
      questionId: string;
      value: number;
    }[];
    comment?: string;
  };
}

export {};
