export default function generatePass() {
  const characters: string = '!@#$*?abcdefghijklmnopqrstuwyz0123456789ABCDEFGHIJLKMNOPQRSTUVXWYZ';
  const passwordLength: number = 8;
  let password: string = '';
  
  for (let index = 0; index < passwordLength; index++ ) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  };

  return password;
};