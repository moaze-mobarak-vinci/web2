
import { PageTitle } from "./components/PageTitle/PageTitle";
import { UserCard } from "./components/UserCard/UserCard";
import { FooterText } from "./components/Footer/FooterText";


const App = () => {
  const title = "Welcome to My App";
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 35;
  const footerText = "© 2023 My App";



  //children pas obligatoire car optionnel
  return (
    <div>
      <PageTitle title = {title} logoUrl="" >
          
        </PageTitle>
        <UserCard name = {name1} age = {age1}/>
        <UserCard name = {name2} age = {age2}/>
        <UserCard name = {name3} age = {age3}/>
          <FooterText text = {footerText}/>
    </div>
  );
};

export default App;

