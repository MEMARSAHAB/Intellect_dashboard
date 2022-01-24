import Card from './Card';
import LinkButton from './LinkButton';

import '../styles/sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar_cont'>
      <Card>
        <LinkButton to={'/'} src={'setting.png'} name={'Dashboard'} />
        <LinkButton to={'/'} src={'copy.png'} name={'Side Type'} />
        <LinkButton to={'/'} src={'setting.png'} name={'Page Layouts'} />
      </Card>
      <Card>
        <LinkButton to={'/'} src={'inbox.png'} name={'Inbox'} />
        <LinkButton to={'/'} src={'bookmark.png'} name={'Ticket'} />
        <LinkButton to={'/'} src={'setting.png'} name={'Extra'} />
      </Card>
      <Card>
        <LinkButton to={'/'} src={'copy.png'} name={'Ui Elements'} />
        <LinkButton to={'/'} src={'cards.png'} name={'Cards'} />
        <LinkButton to={'/'} src={'bookmark.png'} name={'Components'} />
        <LinkButton to={'/'} src={'setting.png'} name={'Widgets'} />
      </Card>
    </div>
  );
}
