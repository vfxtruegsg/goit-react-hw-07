import clStyles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={clStyles["contact-list"]}>
      {filteredContacts.map(({ id, name, number }, index) => (
        <Contact key={index} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
