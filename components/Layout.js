import { Header } from "./Header";

export const Layout = ({ navigation, settings, onChangeHandler, children }) => {
  return (
    <div className="text-slate-800">
      <Header
        navigation={navigation}
        settings={settings}
        onChangeHandler={onChangeHandler}
      />
      <main>{children}</main>
    </div>
  );
};
