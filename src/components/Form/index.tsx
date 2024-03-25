import { View } from 'moti';
import React, {
  forwardRef,
  useRef,
  memo,
  useState,
} from 'react';
import { TextInputProps } from 'react-native';

type RefCollectorType = (arg: { id: string; next?: string }) => TextInputProps;

type FormProps = {
  onSubmit: (value: any) => Promise<any>;
  children: (arg: {
    register: RefCollectorType;
    submit: () => any;
    loading: boolean;
  }) => React.ReactElement;
};

export const Form = memo(
  forwardRef<any, FormProps>((props, ref) => {
    const RefCollection = useRef<{ [key: string]: any }>({});
    const [loading, setLoading] = useState(false);
    const submit = async () => {
      const value: any = {};

      Object.entries(RefCollection.current).forEach(([key, ref]) => {
        value[key] = ref.getValue(value);
      });
      setLoading(true)
      if (!Object.values(value).includes(false)) await props.onSubmit(value);
      setLoading(false)
    };
    const register: RefCollectorType = ({ id, next, ...otherProps }) => {
      return {
        //@ts-ignore
        ref: ref => {
          if (!!ref) {
            RefCollection.current[id] = ref;
          }
        },
        onSubmitEditing: () => {
          if (!!next) {
            RefCollection.current[next]?.focus();
          } else {
            submit();
          }
        },
        next,
        ...otherProps,
      };
    };

    return <View style={{ flex: 1 }} pointerEvents={loading ? 'none' : undefined}>{props.children({ register, submit, loading })}</View>;
  }),
);



export * from "./useForm"
export * from "./Components"