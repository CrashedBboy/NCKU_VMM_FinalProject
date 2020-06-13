#include <iostream>
#include <cstdlib>
#include <chrono> // library for calculating execution time

using namespace std;

int main(int argc, char **argv) {

    if (argc >= 3) {

        int size = atoi(argv[1]);
        int iteration = atoi(argv[2]);

        // cout << "Performing memory allocation of " << size << " MB " 
        //     << iteration << " times" << endl;

        // start time
        auto start = std::chrono::steady_clock::now();

        // memory allocation
        char* ptr;
        for (int i = 1; i <= iteration; i++) {

            // allocate memory
            ptr = (char*) malloc (size);

            // if allocation failed, exit
            if (ptr == NULL) {
                cout << "-1" << endl; // duration -1 indicates failure
                return 0;
            }

            // fill with values
            for (int j = 0; j < size; j++) {
                *(ptr+j) = 'A';
            }

            // release the memory space
            free(ptr);
        }

        // end time
        auto end = std::chrono::steady_clock::now();

        // calculate execution time
        std::chrono::duration<double, std::milli> execution_time =  end - start;

        cout << execution_time.count() << endl;

    }

    return 0;
}