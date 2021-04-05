import { createElement } from 'lwc';
import MyProfileCard from 'my/profileCard';

const app = createElement('my-profile-card', { is: MyProfileCard });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#profile').appendChild(app);
