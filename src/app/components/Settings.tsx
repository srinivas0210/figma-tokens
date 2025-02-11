/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from './Checkbox';
import Heading from './Heading';
import { Dispatch } from '../store';
import Label from './Label';
import { ignoreFirstPartForStylesSelector } from '@/selectors';
import Stack from './Stack';
import Box from './Box';

function SyncSettings() {
  const ignoreFirstPartForStyles = useSelector(ignoreFirstPartForStylesSelector);
  const dispatch = useDispatch<Dispatch>();

  const handleIgnoreChange = React.useCallback((bool: boolean) => {
    dispatch.settings.setIgnoreFirstPartForStyles(bool);
  }, [dispatch.settings]);

  return (
    <Box css={{ padding: '$4' }}>
      <Stack direction="column" gap={4}>

        <Heading>Styles</Heading>
        <Stack direction="column" gap={2}>
          <Stack direction="row" gap={2} align="center">
            <Checkbox
              id="ignoreFirstPartForStyles"
              checked={!!ignoreFirstPartForStyles}
              defaultChecked={ignoreFirstPartForStyles}
              onCheckedChange={handleIgnoreChange}
            />
            <Label htmlFor="ignoreFirstPartForStyles">Ignore first part of token name for styles</Label>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SyncSettings;
