const validarEmail= /\w+@\w+\.\w+/;

console.log(validarEmail.test("jacqueline.barbosa@gmail.com"));
console.log(validarEmail.test("jacqueline@gmail"));
console.log(validarEmail.test("@gmail.com"));
console.log(validarEmail.test("jacqueline.barbosa@gmail.com.br"));