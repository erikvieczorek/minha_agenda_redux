import ContactList from '../../containers/ContactsList'
import Sidebar from '../../containers/Sidebar'

const Home = () => (
  <>
    <Sidebar showSearchBar />
    <ContactList />
  </>
)

export default Home
