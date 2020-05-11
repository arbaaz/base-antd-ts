import { Button, PageHeader } from 'antd';

export default function Home() {
  return (
    <div className="App">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="HelloWorld"
        subTitle="This is a subtitle"
      />
      <h1>Hello Baz!</h1>
      <Button type="primary">Button</Button>
    </div>
  )
}