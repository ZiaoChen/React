import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin, Row, Select, Col} from 'antd';
import { Typography } from 'antd';
import Grid from './ag_grid.jsx'
const { Text } = Typography;
import styles from './index.less';
import GridBasic from './GridBasic';

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class App extends React.Component {
  state = {
    cities: cityData[provinceData[0]],
    city: [],
  };

  handleProvinceChange = value => {
    let cities = []
    for (var i in value){
      if (cities.length == 0){
        cities = cityData[value[i]]
      }else{
        cities = cities.concat(cityData[value[i]])
      }
    }
    console.log(cities)
    this.setState({
      cities: cities,
      city: [],
    });
  };

  handleCityChange = value => {
    this.setState({
      city: value,
    });
  };


  render() {
    const { cities } = this.state;
    return (
      <Row>
      <Col span={6}>
        <Row>
          <Col span={6}>
            <Text strong>Province: </Text>
          </Col>
          <Col span={16}>
            <Select
              allowClear
              mode='multiple'
              defaultValue={provinceData[0]}
              style={{ width: '100%' }}
              onChange={this.handleProvinceChange}
              placeholder="Please select province"
              maxTagCount={1}
            >
              {provinceData.map(province => (
                <Option key={province}>{province}</Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Select
          maxTagCount={1}
          allowClear
          mode='multiple'
          style={{ width: '100%' }}
          value={this.state.city}
          onChange={this.handleCityChange}
          placeholder="Please select city"
        >
          {cities.map(city => (
            <Option key={city}>{city}</Option>
          ))}
        </Select>
      </Col>

      <Col span={12}>
        <Grid></Grid>
      </Col>
      </Row>
    );
  }
}
const { Option } = Select;
export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>


          <App></App>

    </PageHeaderWrapper>
  );
};
