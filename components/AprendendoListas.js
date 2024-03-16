import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = require('../assets/iconDog.png');

const AprendendoListas = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 14, paddingLeft: 10, color: 'black' }}>Scroll</Text>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Text style={{ fontSize: 14, paddingLeft: 10, color: 'black'  }}>Mais um scroll</Text>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Text style={{ fontSize: 14, paddingLeft: 10, color: 'black'  }}>Continue o scroll para baixo</Text>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Text style={{ fontSize: 14, paddingLeft: 10, color: 'black'  }}>Mais um poquinho</Text>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Text style={{ fontSize: 14, paddingLeft: 10, color: 'black'  }}>Quase lá</Text>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Image source={logo} style={{ width: 30, height: 30, paddingBottom: 5 }}/>
        <Text style={{ fontSize: 14, paddingLeft: 10, color: 'black'  }}>Uhul, você chegou ao final do scroll!</Text>
    </ScrollView>
);

export default AprendendoListas;