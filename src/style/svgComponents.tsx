import styled from 'styled-components';
import {ReactComponent as SearchSvg} from '../Asset/images/search.svg';
import {ReactComponent as LighModeSvg} from '../Asset/images/light_mode.svg';
import {ReactComponent as DarkModeSvg} from '../Asset/images/dark_mode.svg';
import {ReactComponent as AddBoxSvg} from '../Asset/images/add_box.svg'
import {ReactComponent as ArrowSvg} from '../Asset/images/arrow.svg'


export const SearchIcon = styled(SearchSvg)`
  width: 28px;
  height: 28px;
  margin:10px;
  fill: ${({theme})=>theme.colors.icon};
`
export const LightModeIcon = styled(LighModeSvg)`
  width: 28px;
  height: 28px;
  margin:10px;
  fill: ${({theme})=>theme.colors.icon};
  animation: turnIcon 1s;
  @keyframes turnIcon {
    from {
      transform:rotate(0.5turn); ;
    }
    to { 
      transform:rotate(0);
    }
  }
`
export const DarkModeIcon = styled(DarkModeSvg)`
  width: 28px;
  height: 28px;
  margin:10px;
  fill: ${({theme})=>theme.colors.icon};
  animation: turnIcon 1s;
  @keyframes turnIcon {
    from {
      transform:rotate(-90deg); ;
    }
    to { 
      transform:rotate(0);
    }
  }
`
export const AddBoxIcon = styled(AddBoxSvg)`
  width: 28px;
  height: 28px;
  margin:10px;
  fill: ${({theme})=>theme.colors.icon};
`
export const ArrowIcon = styled(ArrowSvg)`
  width: 15px;
  height: 15px;
  margin:10px;
  fill: ${({theme})=>theme.colors.icon};
`