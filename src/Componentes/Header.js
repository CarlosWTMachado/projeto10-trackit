import appName from '../Assets/trackIt.png'
import profile from '../Assets/profile.png'

export default function Header() {
	return (
		<div>
			<div>
				<img src={appName} alt={'app-name'}/>
			</div>
			<div>
				<img src={profile} alt={'user-profile'}/>
			</div>
		</div>
	);
}