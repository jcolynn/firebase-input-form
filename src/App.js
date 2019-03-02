import React, { Component } from 'react';
import uuid from 'uuid/v1';
import app from 'firebase/app';
import 'firebase/firestore';
import './app.css'


  var config = {
    apiKey: "AIzaSyDGPXhY-ttjgbqcnZ4ShGxmlOqiHqfuscw",
    authDomain: "knxhx2019.firebaseapp.com",
    databaseURL: "https://knxhx2019.firebaseio.com",
    projectId: "knxhx2019",
    storageBucket: "knxhx2019.appspot.com",
    messagingSenderId: "290426352442"
  };

class App extends Component {
  constructor(props) {
    super(props);

    app.initializeApp(config);

    this.db = app.firestore();
    this.state = {
        name: '',
        phoneNumber: '',
        street: '',
        city: 'Knoxville',
        state: 'TN',
        zipCode: '',
        url: '',
        additionalEligibility: '',
        description: '',
        id: uuid(),
        domesticViolenceShelter: false,
        emergencyShelter: false,
        female: false,
        fosterYouth: false,
        handicap: false,
        lgbtq: false,
        male: false,
        maternityShelter: false,
        over18: false,
        parenting: false,
        probation: false,
        queer: false,
        trans: false,
        transitionalHousing: false,
        veteran: false,
        veteranHousing: false
    }
  }


  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    let doc = this.state;
    this.db.collection('service_providers').add(doc)
      .then(() => console.log('success'))
      .catch((error) => console.log(error))
    event.preventDefault();

  }


  render() {
    const {
          name,
          phoneNumber,
          street,
          zipCode,
          url,
          additionalEligibility,
          description,
          domesticViolenceShelter,
          emergencyShelter,
          female,
          fosterYouth,
          handicap,
          lgbtq,
          male,
          maternityShelter,
          over18,
          parenting,
          probation,
          queer,
          trans,
          transitionalHousing,
          veteran,
          veteranHousing
        } = this.state;


    return (
      <div className="App">
        <form onSubmit = {this.onSubmit} >
          <input
            type = "name"
            name = "name"
            value = {name}
            placeholder = "Name"
            onChange = {this.onChange}
          />
          <input
            type = "phoneNumber"
            name = "phoneNumber"
            value = {phoneNumber}
            placeholder = "Phone Number"
            onChange = {this.onChange}
          />
          <input
            type = "street"
            name = "street"
            value = {street}
            placeholder = "Street"
            onChange = {this.onChange}
          />
          <input
            type = "description"
            name = "description"
            value = {description}
            placeholder = "description"
            onChange = {this.onChange}
          />
          <input
            type = "zipCode"
            name = "zipCode"
            value = {zipCode}
            placeholder = "Zip Code"
            onChange = {this.onChange}
          />
          <input
            type = "url"
            name = "url"
            value = {url}
            placeholder = "url"
            onChange = {this.onChange}
          />
          <input
            type = "additionalEligibility"
            name = "additionalEligibility"
            value = {additionalEligibility}
            placeholder = "additionalEligibility"
            onChange = {this.onChange}
          />
          <div className="chk">
            <label htmlFor="domestic">Domestic Violence Shelter</label>
            <input
              id="domestic"
              type="checkbox"
              name="domestic"
              value={domesticViolenceShelter}
              onClick={() => this.setState({ domesticViolenceShelter: !domesticViolenceShelter})}
            />
          </div>
          <div className="chk">
          <label htmlFor="emergency">Emergency Shelter</label>
          <input
            id="emergency"
            type="checkbox"
            name="emergencyShelter"
            value={emergencyShelter}
            onClick={() => this.setState({ emergencyShelter: !emergencyShelter})}
          />
          </div>
          <div className="chk">
          <label htmlFor="female">female</label>
          <input
            id="female"
            type="checkbox"
            value={female}
            onClick={() => this.setState({ female: !female})}
          />
          </div>
          <div className="chk">
          <label htmlFor="fosterYouth">Foster Youth</label>
          <input
            id="fosterYouth"
            type="checkbox"
            value={fosterYouth}
            onClick={() => this.setState({ fosterYouth: !fosterYouth})}
          />
          </div>
          <div className="chk">
          <label htmlFor="handicap">Handicap</label>
          <input
            id="handicap"
            type="checkbox"
            value={handicap}
            onClick={() => this.setState({ handicap: !handicap})}
          />
          </div>
          <div className="chk">
          <label htmlFor="lgbtq">lgbtq</label>
          <input
            id="lgbtq"
            type="checkbox"
            value={lgbtq}
            onClick={() => this.setState({ lgbtq: !lgbtq})}
          />
          </div>
          <div className="chk">
          <label htmlFor="male">male</label>
          <input
            id="male"
            type="checkbox"
            value={male}
            onClick={() => this.setState({ male: !male})}
          />
          </div>
          <div className="chk">
          <label htmlFor="maternity">Maternity Shelter</label>
          <input
            id="maternity"
            type="checkbox"
            value={maternityShelter}
            onClick={() => this.setState({ maternityShelter: !maternityShelter})}
          />
          </div>
          <div className="chk">
          <label htmlFor="over18">Over18</label>
          <input
            id="over18"
            type="checkbox"
            name="over18"
            value={over18}
            onClick={() => this.setState({ over18: !over18})}
          />
          </div>
          <div className="chk">
          <label htmlFor="parenting">parenting</label>
          <input
            id="parenting"
            type="checkbox"
            name="parenting"
            value={parenting}
            onClick={() => this.setState({ parenting: !parenting})}
          />
          </div>
          <div className="chk">
          <label htmlFor="probation">Probation</label>
          <input
            id="probation"
            type="checkbox"
            name="probation"
            value={probation}
            onClick={() => this.setState({ probation: !probation})}
          />
          </div>
          <div className="chk">
          <label htmlFor="queer">queer</label>
          <input
            id="queer"
            type="checkbox"
            name="queer"
            value={queer}
            onClick={() => this.setState({ queer: !queer})}
          />
          </div>
          <div className="chk">
          <label htmlFor="trans">trans</label>
          <input
            id="trans"
            type="checkbox"
            name="trans"
            value={trans}
            onClick={() => this.setState({ trans: !trans})}
          />
          </div>
          <div className="chk">
          <label htmlFor="transitionalHousing">transitionalHousing</label>
          <input
            id="transitionalHousing"
            type="checkbox"
            name="transitionalHousing"
            value={transitionalHousing}
            onClick={() => this.setState({ transitionalHousing: !transitionalHousing})}
          />
          </div>
          <div className="chk">
          <label htmlFor="veteran">veteran</label>
          <input
            id="veteran"
            type="checkbox"
            name="veteran"
            value={veteran}
            onClick={() => this.setState({ veteran: !veteran})}
          />
          </div>
          <div className="chk">
          <label htmlFor="veteranHousing">veteranHousing</label>
          <input
            id="veteranHousing"
            type="checkbox"
            name="veteranHousing"
            value={veteranHousing}
            onClick={() => this.setState({ veteranHousing: !veteranHousing})}
          />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
