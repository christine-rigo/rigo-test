export type Member = {
	name?: string;
	title: string;
	description: string;
	hobbies: string;
	achievements?: string;
};

const getPeople = <T extends string>(et: Record<T, Member>) => et;

export const PEOPLE = getPeople({
	'eleanor ward': {
		title: 'creative director & agency co-founder',
		description: `
			We co-founded rigo with a goal to create campaigns that put credible and creative content at the heart of multichannel campaigns, from conception to execution. 
			<br><br/>
			Whether an audience is global or hyper-local, we stay true to this, creating original, interesting, valuable assets that deliver genuine value to the target audience as part of carefuly structured digital campaigns.
		`,
		hobbies: `Outside of work you'll find me swimming in a lake or up a mountain with my 2 rescue dogs.`,
	},
	'stephen ideh': {
		title: 'growth director & agency co-founder',
		description: `rigo was born out of a clear mission to empower organisations with the strength to channel their brand voice through a multitude of digital channels. We create impactful digital campaigns that draw on the power of great content marketing married with high-quality design and new technologies to maximise reach for our clients, getting their content not just front of mind but front of conversation.`,
		hobbies: `When I'm not busy leading a fast-paced digital agency, you'll find me outside in nature going for long runs, exercising with Milo my 18 month old Cockapoo and focusing on family.`,
		achievements: `As a co-founder of rigo I'm immensely proud to work with a savvy team of digital marketers, copywriters, designers and developers who turn our clients dreams into reality, solving complex problems at high speeds on a daily basis.`,
	},
	'pete adams': {
		title: 'copywriter',
		description: `Joining rigo I immediately immersed myself in a variety of accounts ranging from brands wishing to make waves in the UK precious metals markets to news outlets looking for copywriters with an eye for a good story. As time has progressed, I have found myself increasingly tapping into the journalistic side of my work.`,
		hobbies: `My passion for writing extends into writing fiction in my spare time, and I occasionally help friends in producing short films and other such projects, writing stories or even acting in them.`,
		achievements: `I've had the opportunity of helping several clients apply successfully to Google News, helping them reach wider audiences.`,
	},
	'natasha carmichael': {
		title: 'campaign manager',
		description: `Working closely with our team of copywriters, designers and developers I deliver a multitude of high performing digital marketing campaigns in my role as Digital Marketing Executive.`,
		hobbies: `Outside of work, I scour Netflix & Disney+ for new series and films to watch, trying new restaurants and renovating my first home which I moved into at the end of 2020.`,
		achievements: `The achievement I am most proud of is the launch of one of our client's new retailer website, which now currently hosts nearly 200 different pages in which I regularly work with the content, design & developer teams to update and optimise the UX experience.`,
	},
	'alex turner': {
		title: 'Senior Copywriter',
		description: `Copy is central to my role as a copywriter at Rigo (the clue's in the job title). I work with value driven brands across a wide range of sectors. I'm equally happy writing mammoth long-form content, as I am crafting engaging blogs and snappy microcopy.`,
		hobbies: `I'm an enthusiastic, if currently limited guitarist. When I'm not writing about exciting brands, I'm probably playing or watching cricket.`,
		achievements: `I'm proud of helping business owners and organisations reach their goals, whether they are just starting off, or already established.`,
	},
	'indigo shaw': {
		title: 'account manager',
		description: `My role has grown significantly since I joined as the company has expanded. I write engaging, catchy digital campaign copy for my main client - a world-leading tobacco company. But I have also worked with other great businesses while at rigo.`,
		hobbies: `I spend my spare time drawing, painting, baking - anything creative goes.`,
		achievements: `I'm proud to have helped in the creation of a new website - giving it a completely new look, sound and feel. I'm also excited to be a part of helping the brand's goals become a reality.`,
	},
	'marcos perona': {
		title: 'web developer',
		description: ``,
		hobbies: ``,
		achievements: ``,
	},
	'eleanor bonsor': {
		title: 'graphic designer',
		description: ``,
		achievements: ``,
		hobbies: ``,
	},
});
