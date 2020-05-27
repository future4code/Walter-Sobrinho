import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import {
  SubsPageContainer,
  BgImage,
  FormWrapper,
  Input,
  Form,
  Seletor,
  Opcao,
  Botao,
} from "./style";
import { useForm } from "../../functions";

function SubsPage() {
  const { form, onChange, resetForm } = useForm({
    nome: "",
    age: "",
    motivation: "",
    job: "",
    country: "",
  });

  const dealInputChange = (event) => {
    const { value, name } = event.target;
    onChange(name, value);
  };

  const functionSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  return (
    <SubsPageContainer>
      <Header />
      <BgImage src="https://wallpaperaccess.com/full/401057.jpg" />
      <FormWrapper>
        <Form onSubmit={functionSubmit}>
          <Input
            variant="outlined"
            name="nome"
            type="text"
            required
            value={Form.name}
            onChange={dealInputChange}
            placeholder="Digite seu nome"
          />
          <Input
            variant="outlined"
            name="age"
            type="number"
            required
            value={Form.name}
            onChange={dealInputChange}
            placeholder="Digite sua idade"
          />
          <Input
            variant="outlined"
            name="motivo"
            type="text"
            required
            value={Form.name}
            onChange={dealInputChange}
            placeholder="Digite sua motivação"
          />
          <Input
            variant="outlined"
            name="job"
            type="text"
            required
            value={Form.name}
            onChange={dealInputChange}
            placeholder="Digite seu emprego"
          />
          <Seletor name="country">
            <Opcao value="Afganistan">Afghanistan</Opcao>
            <Opcao value="Albania">Albania</Opcao>
            <Opcao value="Algeria">Algeria</Opcao>
            <Opcao value="American Samoa">American Samoa</Opcao>
            <Opcao value="Andorra">Andorra</Opcao>
            <Opcao value="Angola">Angola</Opcao>
            <Opcao value="Anguilla">Anguilla</Opcao>
            <Opcao value="Antigua & Barbuda">Antigua & Barbuda</Opcao>
            <Opcao value="Argentina">Argentina</Opcao>
            <Opcao value="Armenia">Armenia</Opcao>
            <Opcao value="Aruba">Aruba</Opcao>
            <Opcao value="Australia">Australia</Opcao>
            <Opcao value="Austria">Austria</Opcao>
            <Opcao value="Azerbaijan">Azerbaijan</Opcao>
            <Opcao value="Bahamas">Bahamas</Opcao>
            <Opcao value="Bahrain">Bahrain</Opcao>
            <Opcao value="Bangladesh">Bangladesh</Opcao>
            <Opcao value="Barbados">Barbados</Opcao>
            <Opcao value="Belarus">Belarus</Opcao>
            <Opcao value="Belgium">Belgium</Opcao>
            <Opcao value="Belize">Belize</Opcao>
            <Opcao value="Benin">Benin</Opcao>
            <Opcao value="Bermuda">Bermuda</Opcao>
            <Opcao value="Bhutan">Bhutan</Opcao>
            <Opcao value="Bolivia">Bolivia</Opcao>
            <Opcao value="Bonaire">Bonaire</Opcao>
            <Opcao value="Bosnia & Herzegovina">Bosnia & Herzegovina</Opcao>
            <Opcao value="Botswana">Botswana</Opcao>
            <Opcao value="Brazil">Brazil</Opcao>
            <Opcao value="British Indian Ocean Ter">
              British Indian Ocean Ter
            </Opcao>
            <Opcao value="Brunei">Brunei</Opcao>
            <Opcao value="Bulgaria">Bulgaria</Opcao>
            <Opcao value="Burkina Faso">Burkina Faso</Opcao>
            <Opcao value="Burundi">Burundi</Opcao>
            <Opcao value="Cambodia">Cambodia</Opcao>
            <Opcao value="Cameroon">Cameroon</Opcao>
            <Opcao value="Canada">Canada</Opcao>
            <Opcao value="Canary Islands">Canary Islands</Opcao>
            <Opcao value="Cape Verde">Cape Verde</Opcao>
            <Opcao value="Cayman Islands">Cayman Islands</Opcao>
            <Opcao value="Central African Republic">
              Central African Republic
            </Opcao>
            <Opcao value="Chad">Chad</Opcao>
            <Opcao value="Channel Islands">Channel Islands</Opcao>
            <Opcao value="Chile">Chile</Opcao>
            <Opcao value="China">China</Opcao>
            <Opcao value="Christmas Island">Christmas Island</Opcao>
            <Opcao value="Cocos Island">Cocos Island</Opcao>
            <Opcao value="Colombia">Colombia</Opcao>
            <Opcao value="Comoros">Comoros</Opcao>
            <Opcao value="Congo">Congo</Opcao>
            <Opcao value="Cook Islands">Cook Islands</Opcao>
            <Opcao value="Costa Rica">Costa Rica</Opcao>
            <Opcao value="Cote DIvoire">Cote DIvoire</Opcao>
            <Opcao value="Croatia">Croatia</Opcao>
            <Opcao value="Cuba">Cuba</Opcao>
            <Opcao value="Curaco">Curacao</Opcao>
            <Opcao value="Cyprus">Cyprus</Opcao>
            <Opcao value="Czech Republic">Czech Republic</Opcao>
            <Opcao value="Denmark">Denmark</Opcao>
            <Opcao value="Djibouti">Djibouti</Opcao>
            <Opcao value="Dominica">Dominica</Opcao>
            <Opcao value="Dominican Republic">Dominican Republic</Opcao>
            <Opcao value="East Timor">East Timor</Opcao>
            <Opcao value="Ecuador">Ecuador</Opcao>
            <Opcao value="Egypt">Egypt</Opcao>
            <Opcao value="El Salvador">El Salvador</Opcao>
            <Opcao value="Equatorial Guinea">Equatorial Guinea</Opcao>
            <Opcao value="Eritrea">Eritrea</Opcao>
            <Opcao value="Estonia">Estonia</Opcao>
            <Opcao value="Ethiopia">Ethiopia</Opcao>
            <Opcao value="Falkland Islands">Falkland Islands</Opcao>
            <Opcao value="Faroe Islands">Faroe Islands</Opcao>
            <Opcao value="Fiji">Fiji</Opcao>
            <Opcao value="Finland">Finland</Opcao>
            <Opcao value="France">France</Opcao>
            <Opcao value="French Guiana">French Guiana</Opcao>
            <Opcao value="French Polynesia">French Polynesia</Opcao>
            <Opcao value="French Southern Ter">French Southern Ter</Opcao>
            <Opcao value="Gabon">Gabon</Opcao>
            <Opcao value="Gambia">Gambia</Opcao>
            <Opcao value="Georgia">Georgia</Opcao>
            <Opcao value="Germany">Germany</Opcao>
            <Opcao value="Ghana">Ghana</Opcao>
            <Opcao value="Gibraltar">Gibraltar</Opcao>
            <Opcao value="Great Britain">Great Britain</Opcao>
            <Opcao value="Greece">Greece</Opcao>
            <Opcao value="Greenland">Greenland</Opcao>
            <Opcao value="Grenada">Grenada</Opcao>
            <Opcao value="Guadeloupe">Guadeloupe</Opcao>
            <Opcao value="Guam">Guam</Opcao>
            <Opcao value="Guatemala">Guatemala</Opcao>
            <Opcao value="Guinea">Guinea</Opcao>
            <Opcao value="Guyana">Guyana</Opcao>
            <Opcao value="Haiti">Haiti</Opcao>
            <Opcao value="Hawaii">Hawaii</Opcao>
            <Opcao value="Honduras">Honduras</Opcao>
            <Opcao value="Hong Kong">Hong Kong</Opcao>
            <Opcao value="Hungary">Hungary</Opcao>
            <Opcao value="Iceland">Iceland</Opcao>
            <Opcao value="Indonesia">Indonesia</Opcao>
            <Opcao value="India">India</Opcao>
            <Opcao value="Iran">Iran</Opcao>
            <Opcao value="Iraq">Iraq</Opcao>
            <Opcao value="Ireland">Ireland</Opcao>
            <Opcao value="Isle of Man">Isle of Man</Opcao>
            <Opcao value="Israel">Israel</Opcao>
            <Opcao value="Italy">Italy</Opcao>
            <Opcao value="Jamaica">Jamaica</Opcao>
            <Opcao value="Japan">Japan</Opcao>
            <Opcao value="Jordan">Jordan</Opcao>
            <Opcao value="Kazakhstan">Kazakhstan</Opcao>
            <Opcao value="Kenya">Kenya</Opcao>
            <Opcao value="Kiribati">Kiribati</Opcao>
            <Opcao value="Korea North">Korea North</Opcao>
            <Opcao value="Korea Sout">Korea South</Opcao>
            <Opcao value="Kuwait">Kuwait</Opcao>
            <Opcao value="Kyrgyzstan">Kyrgyzstan</Opcao>
            <Opcao value="Laos">Laos</Opcao>
            <Opcao value="Latvia">Latvia</Opcao>
            <Opcao value="Lebanon">Lebanon</Opcao>
            <Opcao value="Lesotho">Lesotho</Opcao>
            <Opcao value="Liberia">Liberia</Opcao>
            <Opcao value="Libya">Libya</Opcao>
            <Opcao value="Liechtenstein">Liechtenstein</Opcao>
            <Opcao value="Lithuania">Lithuania</Opcao>
            <Opcao value="Luxembourg">Luxembourg</Opcao>
            <Opcao value="Macau">Macau</Opcao>
            <Opcao value="Macedonia">Macedonia</Opcao>
            <Opcao value="Madagascar">Madagascar</Opcao>
            <Opcao value="Malaysia">Malaysia</Opcao>
            <Opcao value="Malawi">Malawi</Opcao>
            <Opcao value="Maldives">Maldives</Opcao>
            <Opcao value="Mali">Mali</Opcao>
            <Opcao value="Malta">Malta</Opcao>
            <Opcao value="Marshall Islands">Marshall Islands</Opcao>
            <Opcao value="Martinique">Martinique</Opcao>
            <Opcao value="Mauritania">Mauritania</Opcao>
            <Opcao value="Mauritius">Mauritius</Opcao>
            <Opcao value="Mayotte">Mayotte</Opcao>
            <Opcao value="Mexico">Mexico</Opcao>
            <Opcao value="Midway Islands">Midway Islands</Opcao>
            <Opcao value="Moldova">Moldova</Opcao>
            <Opcao value="Monaco">Monaco</Opcao>
            <Opcao value="Mongolia">Mongolia</Opcao>
            <Opcao value="Montserrat">Montserrat</Opcao>
            <Opcao value="Morocco">Morocco</Opcao>
            <Opcao value="Mozambique">Mozambique</Opcao>
            <Opcao value="Myanmar">Myanmar</Opcao>
            <Opcao value="Nambia">Nambia</Opcao>
            <Opcao value="Nauru">Nauru</Opcao>
            <Opcao value="Nepal">Nepal</Opcao>
            <Opcao value="Netherland Antilles">Netherland Antilles</Opcao>
            <Opcao value="Netherlands">Netherlands (Holland, Europe)</Opcao>
            <Opcao value="Nevis">Nevis</Opcao>
            <Opcao value="New Caledonia">New Caledonia</Opcao>
            <Opcao value="New Zealand">New Zealand</Opcao>
            <Opcao value="Nicaragua">Nicaragua</Opcao>
            <Opcao value="Niger">Niger</Opcao>
            <Opcao value="Nigeria">Nigeria</Opcao>
            <Opcao value="Niue">Niue</Opcao>
            <Opcao value="Norfolk Island">Norfolk Island</Opcao>
            <Opcao value="Norway">Norway</Opcao>
            <Opcao value="Oman">Oman</Opcao>
            <Opcao value="Pakistan">Pakistan</Opcao>
            <Opcao value="Palau Island">Palau Island</Opcao>
            <Opcao value="Palestine">Palestine</Opcao>
            <Opcao value="Panama">Panama</Opcao>
            <Opcao value="Papua New Guinea">Papua New Guinea</Opcao>
            <Opcao value="Paraguay">Paraguay</Opcao>
            <Opcao value="Peru">Peru</Opcao>
            <Opcao value="Phillipines">Philippines</Opcao>
            <Opcao value="Pitcairn Island">Pitcairn Island</Opcao>
            <Opcao value="Poland">Poland</Opcao>
            <Opcao value="Portugal">Portugal</Opcao>
            <Opcao value="Puerto Rico">Puerto Rico</Opcao>
            <Opcao value="Qatar">Qatar</Opcao>
            <Opcao value="Republic of Montenegro">Republic of Montenegro</Opcao>
            <Opcao value="Republic of Serbia">Republic of Serbia</Opcao>
            <Opcao value="Reunion">Reunion</Opcao>
            <Opcao value="Romania">Romania</Opcao>
            <Opcao value="Russia">Russia</Opcao>
            <Opcao value="Rwanda">Rwanda</Opcao>
            <Opcao value="St Barthelemy">St Barthelemy</Opcao>
            <Opcao value="St Eustatius">St Eustatius</Opcao>
            <Opcao value="St Helena">St Helena</Opcao>
            <Opcao value="St Kitts-Nevis">St Kitts-Nevis</Opcao>
            <Opcao value="St Lucia">St Lucia</Opcao>
            <Opcao value="St Maarten">St Maarten</Opcao>
            <Opcao value="St Pierre & Miquelon">St Pierre & Miquelon</Opcao>
            <Opcao value="St Vincent & Grenadines">
              St Vincent & Grenadines
            </Opcao>
            <Opcao value="Saipan">Saipan</Opcao>
            <Opcao value="Samoa">Samoa</Opcao>
            <Opcao value="Samoa American">Samoa American</Opcao>
            <Opcao value="San Marino">San Marino</Opcao>
            <Opcao value="Sao Tome & Principe">Sao Tome & Principe</Opcao>
            <Opcao value="Saudi Arabia">Saudi Arabia</Opcao>
            <Opcao value="Senegal">Senegal</Opcao>
            <Opcao value="Seychelles">Seychelles</Opcao>
            <Opcao value="Sierra Leone">Sierra Leone</Opcao>
            <Opcao value="Singapore">Singapore</Opcao>
            <Opcao value="Slovakia">Slovakia</Opcao>
            <Opcao value="Slovenia">Slovenia</Opcao>
            <Opcao value="Solomon Islands">Solomon Islands</Opcao>
            <Opcao value="Somalia">Somalia</Opcao>
            <Opcao value="South Africa">South Africa</Opcao>
            <Opcao value="Spain">Spain</Opcao>
            <Opcao value="Sri Lanka">Sri Lanka</Opcao>
            <Opcao value="Sudan">Sudan</Opcao>
            <Opcao value="Suriname">Suriname</Opcao>
            <Opcao value="Swaziland">Swaziland</Opcao>
            <Opcao value="Sweden">Sweden</Opcao>
            <Opcao value="Switzerland">Switzerland</Opcao>
            <Opcao value="Syria">Syria</Opcao>
            <Opcao value="Tahiti">Tahiti</Opcao>
            <Opcao value="Taiwan">Taiwan</Opcao>
            <Opcao value="Tajikistan">Tajikistan</Opcao>
            <Opcao value="Tanzania">Tanzania</Opcao>
            <Opcao value="Thailand">Thailand</Opcao>
            <Opcao value="Togo">Togo</Opcao>
            <Opcao value="Tokelau">Tokelau</Opcao>
            <Opcao value="Tonga">Tonga</Opcao>
            <Opcao value="Trinidad & Tobago">Trinidad & Tobago</Opcao>
            <Opcao value="Tunisia">Tunisia</Opcao>
            <Opcao value="Turkey">Turkey</Opcao>
            <Opcao value="Turkmenistan">Turkmenistan</Opcao>
            <Opcao value="Turks & Caicos Is">Turks & Caicos Is</Opcao>
            <Opcao value="Tuvalu">Tuvalu</Opcao>
            <Opcao value="Uganda">Uganda</Opcao>
            <Opcao value="United Kingdom">United Kingdom</Opcao>
            <Opcao value="Ukraine">Ukraine</Opcao>
            <Opcao value="United Arab Erimates">United Arab Emirates</Opcao>
            <Opcao value="United States of America">
              United States of America
            </Opcao>
            <Opcao value="Uraguay">Uruguay</Opcao>
            <Opcao value="Uzbekistan">Uzbekistan</Opcao>
            <Opcao value="Vanuatu">Vanuatu</Opcao>
            <Opcao value="Vatican City State">Vatican City State</Opcao>
            <Opcao value="Venezuela">Venezuela</Opcao>
            <Opcao value="Vietnam">Vietnam</Opcao>
            <Opcao value="Virgin Islands (Brit)">Virgin Islands (Brit)</Opcao>
            <Opcao value="Virgin Islands (USA)">Virgin Islands (USA)</Opcao>
            <Opcao value="Wake Island">Wake Island</Opcao>
            <Opcao value="Wallis & Futana Is">Wallis & Futana Is</Opcao>
            <Opcao value="Yemen">Yemen</Opcao>
            <Opcao value="Zaire">Zaire</Opcao>
            <Opcao value="Zambia">Zambia</Opcao>
            <Opcao value="Zimbabwe">Zimbabwe</Opcao>
          </Seletor>
          <Botao variant="contained">Enviar</Botao>
        </Form>
      </FormWrapper>
    </SubsPageContainer>
  );
}

export default SubsPage;
