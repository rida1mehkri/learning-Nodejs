interface Person{
    myname: string;
    age: number;
    isEmployed: boolean;
    nickname?: string;
}

const detail: Person = {
    myname: "rida",
    age: 24,
    isEmployed: true,

}

console.log(`${detail.myname} is ${detail.age} old`)