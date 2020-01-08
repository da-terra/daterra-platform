enum Role {
  None = 1 << 0,
  Admin = 1 << 1,
  Student = 1 << 2,
  Expert = 1 << 3,
  Company = 1 << 4
}

export const hasRole = (role: Role, bit: number) => {
  return (bit & role) === role;
};

export default Role;
