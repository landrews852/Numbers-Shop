import { Toaster as Toasterr, toast } from 'react-hot-toast';

export default function Toaster(props) {
  if (props.style) {
    toast(props.message, {
      icon: props.icon,
      style: props.style,
    });
    return <Toasterr position={props.position} reverseOrder={false} />;
  } else toast.error(props.message);
  return <Toasterr position={props.position} reverseOrder={false} />;
}

// export function Toaster(props) {
// }
