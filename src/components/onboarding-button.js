import React from 'react';
import { TouchableOpacity } from 'react-native-elements';

// Done Button
const DoneButton = () => (
    <TouchableOpacity
      style={styles.buttonContainer}
    >
        <Text style={styles.buttonText}> Done </Text>
    </TouchableOpacity>
);

// Continue Button
const ContinueButton = () => (
  <TouchableOpacity
    style={styles.buttonContainer}
  >
      <Text style={styles.buttonText}> Continue </Text>
  </TouchableOpacity>
);

// Skip Button
const SkipButton = () => (
  <TouchableOpacity
    style={styles.buttonContainer}
  >
      <Text style={styles.buttonText}> Skip </Text>
  </TouchableOpacity>
);