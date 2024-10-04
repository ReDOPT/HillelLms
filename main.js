
const contactBook = {
    contacts: [

        {   name: 'Іван Іванов',
            phone: '+380501234567',
            email: 'ivan@example.com'
        },
        {   name: 'Ольга Петрова',
            phone: '+380971234567',
            email: 'olga@example.com'
        }
    ],


    findContactByName: function(name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : 'Контакт не знайдено';
    },


    addContact: function(name, phone, email) {
        this.contacts.push({ name: name, phone: phone, email: email });
        console.log('Контакт успішно додано');
    }
};

contactBook.addContact('Марія Сидорова', '+380631234567', 'maria@example.com');


const foundContact = contactBook.findContactByName('Іван Іванов');
console.log(foundContact);

console.log(contactBook.contacts);