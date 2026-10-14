import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  // Valida que ambos campos sean numéricos y devuelve los números (o null)
  const getNumbers = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return null;
    }
    return { num1, num2 };
  };

  // ----- Operación original del ejemplo -----
  const handleSum = () => {
    const nums = getNumbers();
    if (nums) {
      setOperation('The sum is');
      setResult(nums.num1 + nums.num2);
    }
  };

  // ----- Ejercicio: operaciones adicionales -----
  const handleSubtract = () => {
    const nums = getNumbers();
    if (nums) {
      setOperation('The subtraction is');
      setResult(nums.num1 - nums.num2);
    }
  };

  const handleMultiply = () => {
    const nums = getNumbers();
    if (nums) {
      setOperation('The product is');
      setResult(nums.num1 * nums.num2);
    }
  };

  const handleDivide = () => {
    const nums = getNumbers();
    if (nums) {
      if (nums.num2 === 0) {
        alert('Cannot divide by zero');
        return;
      }
      setOperation('The division is');
      setResult(nums.num1 / nums.num2);
    }
  };

  const handlePower = () => {
    const nums = getNumbers();
    if (nums) {
      setOperation('The power is');
      setResult(Math.pow(nums.num1, nums.num2));
    }
  };

  const handleModulo = () => {
    const nums = getNumbers();
    if (nums) {
      if (nums.num2 === 0) {
        alert('Cannot divide by zero');
        return;
      }
      setOperation('The remainder is');
      setResult(nums.num1 % nums.num2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter the first number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <Text style={styles.label}>Enter the second number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <View style={styles.buttons}>
        <Button title="Sum" onPress={handleSum} />
        <Button title="Subtract" onPress={handleSubtract} />
        <Button title="Multiply" onPress={handleMultiply} />
      </View>
      <View style={styles.buttons}>
        <Button title="Divide" onPress={handleDivide} />
        <Button title="Power" onPress={handlePower} />
        <Button title="Modulo" onPress={handleModulo} />
      </View>

      {result !== null && (
        <Text style={styles.result}>
          {operation}: {result}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 12,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
  },
});