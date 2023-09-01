interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  Birthday: Date;
  isMember: boolean;
}

let primiryContact: Contact = {
  id: 1,
  name: "mwamuziscodev",
  phone: "123456789",
  email: "mwamuziscodev@gmail.com",
  address: "Dar es salaam",
  Birthday: new Date("1995-12-31"),
  isMember: true,
};

let secondaryContact: Contact = {
    id: 2,
    name: "mwamuziscodev",
    phone: "123456789",
    email: "rertrtry@gmail.com",
    address: "Dar es salaam",
    Birthday: new Date("1995-12-31"),
    isMember: true,
    };
    console.log(primiryContact);
    console.log(secondaryContact);
