import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './style';
import BottomSheet from '@gorhom/bottom-sheet';
function BottomSheetData() {
  const [help, setHelp] = useState(false);
  const snapPoints = useMemo(() => ['22%', '50%', '75%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const screenHeight = Dimensions.get('window').height;
  return (
    <BottomSheet
      initialSnapIndex={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <ScrollView style={{flex: 1}}>
          <>
            <View style={styles.trip_detail}>
              {help === false ? (
                <>
                  <Text style={styles.text_bootom}>
                    Anna Is asking for help
                  </Text>
                  <Text style={styles.text_bootom}>
                    She is 750m far from me{' '}
                  </Text>

                  <TouchableOpacity
                    style={styles.help_button}
                    onPress={() => setHelp(true)}>
                    <Text style={styles.text_bootom_text}>HELP ANNA</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <View style={styles.help_list}>
                    <Text style={[styles.text_bootom, {fontWeight: '700'}]}>
                      You will arive in 3 minutes
                    </Text>
                    <Text
                      style={[
                        styles.text_bootom,
                        {fontWeight: '700', textDecorationLine: 'underline'},
                      ]}>
                      Anna Details
                    </Text>
                    <Text style={styles.help_list_border}></Text>
                  </View>

                  <View style={[styles.help_list, {marginTop: 10}]}>
                    <Text style={[styles.text_bootom, {fontWeight: '700'}]}>
                      John is also near by and is going to help
                    </Text>
                    <Text style={[styles.text_bootom, {fontWeight: '100'}]}>
                      5 min away
                    </Text>
                    <Text style={styles.help_list_border}></Text>
                  </View>

                  <View style={[styles.help_list_row, {marginTop: 10}]}>
                    <View style={styles.first_cell}>
                      <Text style={[styles.text_bootom, {fontWeight: '700'}]}>
                        Sara is near by
                      </Text>
                      <Text style={[styles.text_bootom, {fontWeight: '100'}]}>
                        12 min away
                      </Text>
                    </View>
                    <View style={[styles.second_cell, {paddingRight: 20}]}>
                      <TouchableOpacity style={styles.help_button_Ask}>
                        <Text
                          style={[
                            styles.text_bootom_text,
                            {color: '#8f17b7', textAlign: 'center'},
                          ]}>
                          ASK HELP
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.help_list_border}></Text>

                  <View style={[styles.help_list_row, {marginTop: 10}]}>
                    <View style={styles.first_cell}>
                      <Text style={[styles.text_bootom, {fontWeight: '700'}]}>
                        Costa is also near by
                      </Text>
                      <Text style={[styles.text_bootom, {fontWeight: '100'}]}>
                        16 min away
                      </Text>
                    </View>
                    <View style={styles.second_cell}>
                      <TouchableOpacity style={styles.help_button_Ask}>
                        <Text
                          style={[
                            styles.text_bootom_text,
                            {color: '#8f17b7', textAlign: 'center'},
                          ]}>
                          ASK HELP
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.help_list_border}></Text>
                  </View>
                </>
              )}
            </View>
          </>
        </ScrollView>
      </View>
    </BottomSheet>
  );
}

export default BottomSheetData;
