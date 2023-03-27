import { MediaType, MediaTypeNames } from '@/src/utils';
import { Search2Icon } from '@chakra-ui/icons';
import { Button, FormControl, Input, Select, Stack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
export const MediaSearchForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState<MediaType>(MediaTypeNames.ALL);

  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Stack direction="row" spacing="1">
            <Field name="title">
              {() => (
                <FormControl>
                  <Stack direction="row" spacing="1">
                    <Select
                      defaultValue="all"
                      width="60"
                      onSelect={() => setType}
                    >
                      <option value={MediaTypeNames.ALL}>All</option>
                      <option value={MediaTypeNames.MOVIES}>Movies</option>
                      <option value={MediaTypeNames.TV}>TV Shows</option>
                      <option value={MediaTypeNames.ANIME}>Anime</option>
                    </Select>
                    <Input placeholder="Search by title" />
                  </Stack>
                </FormControl>
              )}
            </Field>
            <Button mt={4} isLoading={props.isSubmitting} type="submit">
              <Search2Icon />
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
