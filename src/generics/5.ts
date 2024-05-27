// У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

//   // Замініть наступний код на версію за допомогою Record
//   const RoleDescription = {
//     admin: 'Admin User',
//     editor: 'Editor User',
//     guest: 'Guest User',
//   };

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserPoleDescription = Record<UserRole, string>;

const RoleDescription: UserPoleDescription = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
