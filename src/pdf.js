//!!!I want to use this instead of GetPDF but have been unable to resolve the following error
//Error: render is a Node specific API. You're either using this method in a browser, or your bundler is not loading react-pdf from the appropriate web build.
//Im currently using createPDDF module instead.
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import ReactPDF from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);