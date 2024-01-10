export type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

export interface TextProps {
	tag?: TagVariants;
	children: string;
}
