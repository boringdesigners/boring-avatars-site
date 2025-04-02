import React from 'react';
import {
  ExampleChat,
  CodeBlock,
  ExampleProfile,
  ExampleSuggested,
  ExampleShared,
  ExampleUpload,
  ExampleInstagram,
  ExampleTwitter
} from '@/components/ui';
import Avatar from 'boring-avatars';
import './styles.css';

type AvatarVariant =
  | 'marble'
  | 'beam'
  | 'pixel'
  | 'sunset'
  | 'ring'
  | 'bauhaus';

interface ExampleProps {
  title: string;
  imgProfile: string;
  imgUpload: string;
  variant: AvatarVariant;
  colors: string[];
  nameProfile: string;
  nameInstagram: string;
  nameUpload: string;
  nameUploadLikes: string[];
  nameSample: string[];
  dataList: Array<{
    name: string;
    email: string;
    time: string;
    status?: boolean;
  }>;
  dataTwitter: Array<{
    name: string;
    handle: string;
    tweet: string;
    time: string;
  }>;
  dataSuggested: Array<{
    name: string;
  }>;
  dataShared: Array<{
    name: string;
    role: string;
  }>;
}

const Example: React.FC<ExampleProps> = ({
  title,
  imgProfile,
  imgUpload,
  variant,
  colors,
  nameProfile,
  nameInstagram,
  nameUpload,
  nameUploadLikes,
  nameSample,
  dataList,
  dataTwitter,
  dataSuggested,
  dataShared
}) => {
  const style = {
    '--color-1': colors[0] + '18',
    '--color-2': colors[1] + '18'
  } as React.CSSProperties;

  const colorsWithoutHash = colors.map((color) => color.slice(1));

  return (
    <section className="example-section">
      <div className="example-code">
        <h2>{title}</h2>
        <div>
          {nameSample.map((name, index) => (
            <Avatar
              key={index}
              size={28}
              name={name}
              variant={variant}
              colors={colors}
            />
          ))}
        </div>
        <h3>React component</h3>
        <CodeBlock
          code={`<Avatar name="Mary Edwards" colors={${JSON.stringify(colors)}} variant="${variant}" />`}
        />
        <h3>
          API service{' '}
          <a href="https://boringdesigners.gumroad.com/l/boring-avatars-service">
            <small>Subscribe</small>
          </a>
        </h3>

        <CodeBlock
          code={`<img src="{YOUR_DOMAIN}/api/avatar?name=Mary%20Edwards&colors=${colorsWithoutHash.join(',')}&variant=${variant}" crossorigin />`}
        />
      </div>
      <div className="example-wrapper" style={style}>
        <ExampleUpload
          name={nameUpload}
          colors={colors}
          variant={variant}
          likes={nameUploadLikes}
          img={imgUpload}
        />
        <ExampleTwitter users={dataTwitter} colors={colors} variant={variant} />
        <ExampleInstagram
          name={nameInstagram}
          colors={colors}
          variant={variant}
          img={imgProfile}
        />
        <ExampleProfile
          name={nameProfile}
          colors={colors}
          variant={variant}
          img={imgProfile}
        />
        <ExampleChat users={dataList} colors={colors} variant={variant} />
        <ExampleSuggested
          users={dataSuggested}
          colors={colors}
          variant={variant}
        />
        <ExampleShared users={dataShared} colors={colors} variant={variant} />
      </div>
    </section>
  );
};

export default Example;
