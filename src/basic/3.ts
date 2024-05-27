// Створіть змінну, яка може містити або рядок, або число (union type)?

type mixedType = string | number;

let mixed: mixedType;
mixed = "string";
mixed = 10;

// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

type EnableOrDisable = "enable" | "disable";

let value: EnableOrDisable;
value = "enable";
value = "disable";
