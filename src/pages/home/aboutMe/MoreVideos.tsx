import styled from '@emotion/styled';
import topology from '../../../config/topology';
import { useThemeState } from '../../../context/useThemeState';
import { THEMES, ThemeType } from '../../../theme';
import Colors from '../../../theme/Colors';
import { DESKTOP_MQ } from '../../../theme/theme.constants';
import { useLocalizationState } from '../../../context/useLocalizationState';

const MoreVideos: React.FC = () => {
  const links = topology();
  const { theme } = useThemeState();
  const { translations } = useLocalizationState();

  return (
    <Container id='more-videos'>
      <iframe
        style={{ margin: '0 auto', border: '9px solid yellow' }}
        width='440'
        height='260'
        src='https://www.youtube.com/embed/EExve0k-iJ8?si=6Ohsblm9-PIw6DST&showinfo=0'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen={true}
      />
    </Container>
  );
};

export default MoreVideos;

const Container = styled.section`
  text-align: center;
  background-color: #11111b;

  & iframe {
    width: 100% !important;
  }

  ${DESKTOP_MQ} {
    padding: 40px;
    & iframe {
      height: 540px !important;
      width: 940px !important;
    }
  }
`;
