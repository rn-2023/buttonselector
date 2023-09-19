import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

  const values = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [value, setValue] = useState(values[0]);

  const ButtonSelector = ({values, selectedValue, selectionChanged}) => {
    return(
      <View style={styles.buttonRow}>
        {values.map(value =>
          <Pressable
            key={value}
            onPress={()=>selectionChanged(value)}>
            <Text style={[styles.button, value==selectedValue && styles.selectedButton]}>
              {value}
            </Text>
          </Pressable>
        )}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select one option:</Text>
      <ButtonSelector
        values={values}
        selectedValue={value}
        selectionChanged={setValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    color: '#620000'
  },
  button: {
    borderWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  selectedButton: {
    backgroundColor: '#f5ae1f'
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
});
