import { createElement } from 'lwc';
import MyProfileCard from 'my/profileCard';

const app = createElement('my-profile-card', { is: MyProfileCard });
// This if statement is needed only when running the watch command, as the postbuild script doesnt run during watch mode
// eslint-disable-next-line @lwc/lwc/no-document-query
if (document.querySelector('#profile')) {
    // eslint-disable-next-line @lwc/lwc/no-document-query
    document.querySelector('#profile').appendChild(app);
}
