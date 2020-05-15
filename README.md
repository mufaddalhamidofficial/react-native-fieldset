# FieldSet

## Installation
```
npm install react-native-fieldset
```
## Usage: 
```javascript
import React from 'react';
import FieldSet from 'react-native-fieldset';
import { View, Text } from 'react-native';

//...
  return (
    <View>
      <FieldSet label="Fieldset label">
        <Text>Field Set Body</Text>
      </FieldSet>
    </View>
  );
//...
```

## Api Reference
Property | Type | Default | Description | Required
-------- | ---- | ------- | --- | ---
label | String | `"FieldSet-label"` | Label for fieldset | Yes
labelBackgroundColor | String | `'#fff'`| background color for label View |No
labelColor | String | `'#000'`| Text Color of label |No
children | React Node | ```<Text>FieldSet-Body</Text>```| things to render inside fieldset |Yes
borderColor | String | `'#777'`| color of border of fieldset |No
labelFontSize | Number | 11.4| fontsize of label(Greater fontsize may not not look good) |No
labelStyle | Object | `{}`| style of label text|No
labelPosition | String(enum) `start`, `center`, `end` | `'start'`| position of label|No
twoLabel| Boolean| false | Can add label both the side|No
label2| String| `"Fieldset-label2"` | label of second string |No
labelStyle2| Object| `{}` | style of second label  |No

## Contact me:

Email: [mufaddalhamidofficial@gmail.com](mailto:mufaddalhamidofficial@gmail.com)

Website: [behlahinfotech.com](http://www.behlahinfotech.com)