#!/usr/bin/perl

my $input_string = do {
  open (my $fh, 'day1.txt') or die "Can't open day1.txt\n";
  local $/ = undef;
  <$fh>;
};
my @chars = split('',$input_string);
my $floor = 0;
my $place = 1;
foreach (@chars) {
  ($_ eq '(') && $floor++;
  ($_ eq ')') && $floor--;
  if ($floor < 0) {
    print 'basement: '. $place . "\n";
    last;
  }
  $place++;
}
