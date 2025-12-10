export function withLoading<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithLoadingComponent(props: P & { isLoading: boolean }) {
    if (props.isLoading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
