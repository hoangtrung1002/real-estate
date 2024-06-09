import React from "react";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";

type ExtraInfoType = {
  location: Location;
  navigate: NavigateFunction;
};

export default function withRouter<P>(
  Component: React.ComponentType<P & ExtraInfoType>
) {
  const EnhancedComponent = (props: P) => {
    const location = useLocation();
    const navigate = useNavigate();
    return <Component {...props} location={location} navigate={navigate} />;
  };
  return EnhancedComponent;
}

// const withRouter =
//   <P extends object>(Component: React.ComponentType<P & ExtraInfoType>) =>
//   (props: P) => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     return <Component {...props} location={location} navigate={navigate} />;
//   };

// export default withRouter;
