const users ={
    name: 'Іван',
    age: 27,
    location: 'Днепр, Україна',
    email: 'ivan@example.com',
    password: '123456',

    getUserInfo: function () {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Вік: ${this.age}`);
        console.log(`Місце проживання: ${this.location}`);
        console.log(`Електронна пошта: ${this.email}`);
        console.log(`пороль: ${this.password}`)
    }

}

users.getUserInfo()