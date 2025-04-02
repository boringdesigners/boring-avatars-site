const Button = ({ as, children, icon, href }) => {
  const Component = as === 'a' ? 'a' : 'button';
  return (
    <Component
      className={`buttonWrapper${children ? ' buttonWithChildren' : ''}`}
      href={href}
    >
      {icon ? icon : null}
      {children}
    </Component>
  );
};

export default Button;
