import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

const Navbar = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '10px 20px 0 20px',
				backgroundColor: theme?.colors.gray50.value,
			}}
		>
			<Image
				src="/pokeball.svg"
				alt="app icon"
				width={40}
				height={40}
				style={{ marginRight: '10px' }}
			/>
			<NextLink href="/">
				<Text color="white" h2>
					Pokemon
				</Text>
			</NextLink>
			<Spacer css={{ flex: 1 }} />
			<NextLink href="/favorites">
				<Text color="white" h4>
					Favorites
				</Text>
			</NextLink>
		</div>
	);
};

export default Navbar;
