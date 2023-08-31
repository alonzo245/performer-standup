import styled from '@emotion/styled';
import { FC } from 'react';
import { useThemeState } from '../../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../../theme';
import Colors from '../../../../theme/Colors';
import { AiFillGithub } from 'react-icons/ai';
import { DESKTOP_MQ } from '../../../../theme/theme.constants';
import dayjs from 'dayjs';
interface Props {
    image: string;
    title: string;
    description: string;
    link: string;
    updatedAt: string;
}
const Card: FC<Props> = ({ image, title, description, link, updatedAt }) => {
    const { theme } = useThemeState();

    return (
        <Container theme={theme}>
            {image ? (
                <span style={{ position: 'relative' }}>
                    <StyledAiFillGithub size={50} />
                    <Img src={image} alt={title}></Img>
                </span>
            ) : (
                <AiFillGithub size={50} />
            )}
            <H3 theme={theme}>{title}</H3>
            <P>{description}</P>
            <UpdatedAt>Last pdated: {dayjs(updatedAt).format('MM/DD/YYYY')}</UpdatedAt>
            <Link href={link} theme={theme} target="_blank">
                View here
            </Link>
        </Container>
    );
};

export default Card;

const Container = styled.div<{ theme: ThemeType }>`
    width: 100%;
    max-height: 470px;
    box-shadow: 5px 5px 20px ${(p) => THEMES[p.theme.themeName]?.cardShadow};
    margin: 10px;
    background-color: ${(p) => THEMES[p.theme.themeName]?.cardBackground};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${DESKTOP_MQ} {
        max-width: 300px;
    }
`;

const Link = styled.a<{ theme: ThemeType }>`
    display: block;
    text-decoration: none;
    background: ${(p) => p.theme.button};
    padding: 10px;
    border-radius: 10px;
    color: ${Colors.white};
    align-self: flex-end;
    width: 100%;

    &:hover {
        color: unset;
        background-color: ${(p) => THEMES[p.theme.themeName]?.cardButtonHover};
    }
`;

const H3 = styled.h3<{ theme: ThemeType }>`
    color: ${(p) => THEMES[p.theme.themeName]?.h3};
    margin: 15px 0;
    font-size: 15px;
    font-weight: 300;
    text-transform: capitalize;
`;

const StyledAiFillGithub = styled(AiFillGithub)`
    position: absolute;
    top: 120px;
    right: 0px;
    background-color: black;
    border-radius: 30px;
`;

const UpdatedAt = styled.p`
    font-size: 12px;
    font-style: italic;
    font-weight: 30x0;
`;

const P = styled.p`
    margin: 0;
    font-size: 15px;
    font-weight: 300;
`;

const Img = styled.img`
    margin-top: 25px;
    margin-bottom: 20px;
    width: 130px;
    border-radius: 125px;
`;
