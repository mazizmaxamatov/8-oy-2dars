
import './App.css'
import Footer from './components/Footer';
import HeroCarousel from './components/Header';

function App() {
    // const [users, setUsers] = useState([])

    // async function getData() {
    //     const res = await axios.get('https://dummyjson.com/users');
    //     setUsers(res.data.users)
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    // console.log(users);

    return (
        <>
            {/* <div>
                <ul className='grid grid-cols-5'>
                    {users.map((person: Person) => (
                        <li className='w-[300px] border-4 mx-auto text-center bg-green-500 text-[#ffffff]' key={person.id}>
                            <h3>Name: {person.firstName}</h3>
                            <h3>Surname: {person.lastName}</h3>
                            <span>Age: {person.age}</span>
                            <p>Address: {person.address.address} -- {person.address.city}</p>
                            <p>Role: {person.role}</p>
                            <br />
                        </li>
                    ))}
                </ul>
            </div> */}


<HeroCarousel/>\
<Footer/>

        </>
    )
}

export default App
