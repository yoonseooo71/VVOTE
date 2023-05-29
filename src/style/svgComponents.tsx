import styled from "styled-components";
import { ReactComponent as SearchSvg } from "../Asset/images/search.svg";
import { ReactComponent as LighModeSvg } from "../Asset/images/light_mode.svg";
import { ReactComponent as DarkModeSvg } from "../Asset/images/dark_mode.svg";
import { ReactComponent as AddBoxSvg } from "../Asset/images/add_box.svg";
import { ReactComponent as ArrowSvg } from "../Asset/images/arrow.svg";
import { ReactComponent as FireSvg } from "../Asset/images/fire.svg";
import { ReactComponent as LogoutSvg } from "../Asset/images/logout.svg";

export const SearchIcon = styled(SearchSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
`;
export const LightModeIcon = styled(LighModeSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  animation: turnIcon 1s;
  @keyframes turnIcon {
    from {
      transform: rotate(0.5turn);
    }
    to {
      transform: rotate(0);
    }
  }
`;
export const DarkModeIcon = styled(DarkModeSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
  animation: turnIcon 1s;
  @keyframes turnIcon {
    from {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(0);
    }
  }
`;
export const AddBoxIcon = styled(AddBoxSvg)`
  width: 25px;
  height: 25px;
  margin: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
`;
export const ArrowIcon = styled(ArrowSvg)`
  width: 13px;
  height: 13px;
  margin: 5px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
`;
export const LogoutIcon = styled(LogoutSvg)`
  width: 25px;
  height: 25px;
  padding-right: 10px;
  fill: ${({ theme }) => theme.colors.icon};
  cursor: pointer;
`;
export const FireIcon = styled(FireSvg)`
  width: 50px;
  height: 50px;
`;
