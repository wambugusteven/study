#include <stdio.h>
#include <unistd.h> 
#include <stdlib.h>  

int main() {
    int width = 50;     
    int pos;             

    for (int step = 0; step < 3; step++) {  
        for (pos = 0; pos < width; pos++) {
            system("clear");  
            
            for (int i = 0; i < pos; i++)
                printf(" ");  
            
            printf("🚶");  
            
            fflush(stdout);  
            usleep(100000);  
        }

        // Walk back
        for (pos = width; pos > 0; pos--) {
            system("clear");
            
            for (int i = 0; i < pos; i++)
                printf(" ");
            
            printf("🏃");  
            fflush(stdout);
            usleep(100000);
        }
    }

    system("clear");
    printf("🎉 The walk is complete!\n");
    return 0;
}
